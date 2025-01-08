import { useState, useEffect } from "react";
import { Sparkles, Camera, ImagePlus } from "lucide-react";
import { toast } from "sonner";
import BottomNavigation from "@/components/BottomNavigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import { generateImage, checkGenerationStatus, type GenerationResponse } from "@/lib/replicate";

const AI = () => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem("replicateApiKey") || "");
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);

  useEffect(() => {
    if (apiKey) {
      localStorage.setItem("replicateApiKey", apiKey);
    }
  }, [apiKey]);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) {
      toast.error("Please enter a prompt");
      return;
    }
    if (!apiKey.trim()) {
      toast.error("Please enter your Replicate API key");
      return;
    }

    setLoading(true);
    try {
      const initialResponse = await generateImage(prompt, apiKey);
      
      // Poll for status updates
      const pollInterval = setInterval(async () => {
        const statusResponse = await checkGenerationStatus(initialResponse.urls.get, apiKey);
        
        if (statusResponse.status === "succeeded" && statusResponse.output) {
          clearInterval(pollInterval);
          setGeneratedImages(prev => [...statusResponse.output!, ...prev]);
          setLoading(false);
          toast.success("Image generated successfully!");
        } else if (statusResponse.status === "failed") {
          clearInterval(pollInterval);
          setLoading(false);
          toast.error("Failed to generate image");
        }
      }, 1000);

      // Cleanup interval after 5 minutes (maximum waiting time)
      setTimeout(() => {
        clearInterval(pollInterval);
        if (loading) {
          setLoading(false);
          toast.error("Generation timed out");
        }
      }, 300000);

    } catch (error) {
      setLoading(false);
      // Error handling is done in the generateImage function
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <div className="container mx-auto pt-8">
        <div className="flex items-center mb-8 px-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-xl font-semibold text-foreground">AI Fashion Generator</span>
          </div>
        </div>

        <div className="px-4 space-y-6">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 space-y-4">
            <input
              type="text"
              placeholder="Enter your Replicate API key"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-foreground placeholder-foreground/50"
            />
            
            <form onSubmit={handleGenerate} className="space-y-4">
              <div className="relative">
                <input
                  type="text"
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Describe the fashion style you want to generate..."
                  className="w-full px-4 py-3 bg-white/5 rounded-xl border border-white/10 text-foreground placeholder-foreground/50 pr-12"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  <ImagePlus className="w-6 h-6 text-accent" />
                </button>
              </div>

              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                >
                  {loading ? "Generating..." : "Generate"}
                </button>
                <button
                  type="button"
                  className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-xl transition-colors"
                >
                  <Camera className="w-6 h-6 text-foreground" />
                </button>
              </div>
            </form>
          </div>

          {loading && <LoadingSpinner />}

          {generatedImages.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Generated Images</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {generatedImages.map((url, index) => (
                  <div
                    key={index}
                    className="aspect-[3/4] rounded-xl overflow-hidden bg-white/5"
                  >
                    <img
                      src={url}
                      alt={`Generated Fashion ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <BottomNavigation />
    </div>
  );
};

export default AI;