import SubscriptionButton from '@/components/SubscriptionButton';
import { ShareButton } from '@/components/ShareButton';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 md:p-24 bg-black text-white selection:bg-emerald-500/30">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex text-emerald-500/80">
        <div className="fixed left-0 top-0 flex w-full justify-center border-b border-white/10 bg-black/50 backdrop-blur-md pb-6 pt-8 dark:border-white/5 lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-white/5 lg:p-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p>The Signal</p>
            <code className="font-bold opacity-50">v1.0.0</code>
          </div>
        </div>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none pointer-events-none">
          <span className="text-xs text-zinc-600">Encrypted Connection</span>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1] mt-10 md:mt-0">
        <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500 tracking-tighter">
          The Signal
        </h1>
      </div>

      <p className="mt-8 text-xl text-zinc-400 max-w-2xl text-center mb-12">
        Decode the noise. Master your reality. Join the elite network of informed operators.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md items-center justify-center">
        <SubscriptionButton priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_ID || 'price_placeholder'} title="Omni-Pass" />
        <ShareButton
          title="The Signal"
          text="Join the elite network."
          url="https://the-signal.vercel.app"
        />
      </div>

      <div className="mt-16 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Briefings{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Daily high-bandwidth intelligence downloads.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Network{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Connect with verified high-agency individuals.
          </p>
        </div>

        <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Archives{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Access the full library of past transmissions.
          </p>
        </div>
      </div>
    </main>
  );
}
