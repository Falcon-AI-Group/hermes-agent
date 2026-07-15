import { cn } from '@/lib/utils'

const assetPath = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

/** Corpus12 brand mark — Falcon Global white-label of Hermes Desktop. */
export function BrandMark({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-md bg-[#0E1B29]',
        className
      )}
      {...props}
    >
      <img alt="Corpus12" className="size-full object-contain" src={assetPath('corpus12-mark.png')} />
    </span>
  )
}
