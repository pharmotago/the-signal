
"use client";

import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

export default function SubscriptionButton({ priceId, title }: { priceId: string, title: string }) {
    const [loading, setLoading] = useState(false);

    const handleCheckout = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    priceId,
                    successUrl: `${window.location.origin}/success`,
                    cancelUrl: `${window.location.origin}/pricing`,
                }),
            });

            const { sessionId } = await response.json();
            const stripe = await stripePromise;

            if (stripe) {
                await stripe.redirectToCheckout({ sessionId });
            }
        } catch (error) {
            console.error('Checkout error:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <button
            onClick={handleCheckout}
            className="w-full py-4 rounded-xl bg-white text-black font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
        >
            {loading ? 'Processing...' : `Upgrade to ${title}`}
        </button>
    );
}
