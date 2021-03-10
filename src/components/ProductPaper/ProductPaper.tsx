import UpshotButton from 'components/UpshotButton'
import * as skins from './skins'

export type ProductPaperProps = {
  id: string
  slug: string
  name: string
  tagline: string
  isVoted: boolean
  thumbnail: string
  votesCount: number
}

const ProductPaper = ({
  name,
  tagline,
  isVoted,
  thumbnail,
  votesCount
}: ProductPaperProps) => (
  <skins.Component data-testid="product-paper-skin">
    <skins.ThumbBox>
      <img src={thumbnail} alt={name} />
    </skins.ThumbBox>
    <skins.InfoBox>
      <skins.Name>{name}</skins.Name>
      <skins.Tagline>{tagline}</skins.Tagline>
    </skins.InfoBox>
    <skins.Actions>
      <UpshotButton isVoted={isVoted} votesCount={votesCount} />
    </skins.Actions>
  </skins.Component>
)

export default ProductPaper
