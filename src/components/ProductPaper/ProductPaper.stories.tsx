import { Story, Meta } from '@storybook/react/types-6-0'
import ProductPaper, { ProductPaperProps } from './ProductPaper'

export default {
  title: 'ProductPaper',
  component: ProductPaper
} as Meta

export const Default: Story<ProductPaperProps> = (args) => (
  <ProductPaper {...args} />
)

Default.args = {
  id: '1',
  slug: 'clearbit',
  name: 'Clearbit Company Logo API',
  tagline: 'Compare character count, pixel width & object length of text',
  thumbnail:
    'https://ph-files.imgix.net/38c837a3-99d1-458c-8efa-c8e4aaed04cc.png?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop',

  isVoted: false,
  votesCount: 12333
}
