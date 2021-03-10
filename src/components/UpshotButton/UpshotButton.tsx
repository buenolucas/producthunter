import * as skins from './skins'

export type UpshotButtonProps = {
  isVoted?: boolean
  votesCount?: number
  onClick?: () => (event: React.MouseEvent<HTMLButtonElement>) => void
}
const counter = new Intl.NumberFormat()
const UpshotButton = ({
  votesCount = 0,
  isVoted = false
}: UpshotButtonProps) => (
  <skins.Component data-testid="upshot-button-skin" isVoted={isVoted}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path
        d="M9.294 20.4c.874-.889 2.048-2.838.498-2.957-.426.173-.812.375-.922.517a.644.644 0 11-1.02-.786c.32-.417.989-.744 1.53-.957.09-.45-.244-1.02-.244-1.02L18.358 3.23l-.144-1.537.749.577.655-.85 2.764 2.129-4.75 6.163c-.719.933-1.329 2.798-.034 4.007.112.063.222.132.326.212 1.377 1.06 1.468 3.258.204 4.898-.723.938-1.735 1.494-2.726 1.6-.06.006-.118.008-.177.01v.002l-.004-.001c-3.853-1.588-5.927-.04-5.927-.04zm3.323-7.918l-1.868 2.424a.423.423 0 00.67.516l1.868-2.424a.423.423 0 00-.67-.516zm1.116.86l-1.868 2.424a.423.423 0 10.67.516l1.868-2.423a.423.423 0 00-.67-.517zm3.255 4.608c.766-.994.793-2.312.058-2.879-.735-.566-2.003-.205-2.77.79a2.94 2.94 0 00-.432.782c.697.172 1.693.29 2.061-.085a.483.483 0 01.69.678c-.73.741-2.105.556-2.907.363.021.469.196.883.53 1.14.736.567 2.004.206 2.77-.789z"
        fill="currentColor"
      />
      <path
        d="M9.386 21.115c2.438-1.712 5.53-.008 5.53-.008-.595.976 2.454 3.586 2.454 3.586 1.837.934 1.758 5.395-2.254 4.464-5.467-1.27-6.104-7.302-5.73-8.042z"
        fill="currentColor"
      />
    </svg>
    <skins.Label>{counter.format(votesCount)}</skins.Label>
  </skins.Component>
)

export default UpshotButton
