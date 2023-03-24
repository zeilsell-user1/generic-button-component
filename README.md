# Cross-Sell-Component

A simple cross-sell or up-sell tile that can be included into any react/next project.

## features

- Three sizes of tile, small, medium and large
- Three aspect ratios, square, full and widescreen
- Optional image for background
- Text colors selectable
- Clicks thorugh to an user-defined URL

## API

```
enum Size {
    small,  // 25% width
    medium, // 50% width
    large,  // 75% width
  }

export enum AspectRatio {
  square,     // 1x1
  fullscreen, // 4x3
  widescreen, // 16:9
}

import { CrossSellTile, Size, AspectRatio } from "@zeilsell-user1/cross-sell-component";

<CrossSellTile
    targetUrl="https://..."
    title="The main text"
    titleColor="blue"
    strapline="strapline under the text"
    straplineColor="#45a21"
    ctaText="button text"
    ctaTextColour="#ad6235"
    size={Size.medium}
    ratio={AspectRatio.square}
    imageUrl='https://testimages.org/img/testimages_screenshot.jpg'
    />
```
