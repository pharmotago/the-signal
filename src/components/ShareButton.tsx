"use client";

import React from "react";
import { Share2 } from "lucide-react";

interface ShareButtonProps {
    title: string;
    text: string;
    url: string;
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title,
                    text,
                    url,
                });
            } catch (error) {
                console.error("Error sharing:", error);
            }
        } else {
            // Fallback for desktop or unsupported browsers
            navigator.clipboard.writeText(url);
            alert("Link copied to clipboard!");
        }
    };

    return (
        <button
            onClick={handleShare}
            className="p-3 bg-white/10 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/20 transition-all active:scale-95"
            aria-label="Share Episode"
        >
            <Share2 className="w-5 h-5 text-zinc-100" />
        </button>
    );
}
