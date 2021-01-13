import { GatsbyImageProps } from './gatsby-image'

export interface WPPageProps {
  node: {
    title: string | undefined
    slug: string | undefined
    content: string | undefined
    seo: {
      canonical: string | undefined
      metaDesc: string | undefined
      seoTitle: string | undefined
    }
    acfFeaturedImage: {
      featuredImage: GatsbyImageProps | undefined
    }
    acfPageHeader: {
      smallHeader: string | undefined
      largeHeader: string | undefined
      leadIn: string | undefined
    }
    acfHomePageCallouts: {
      callout1Text: string | undefined
      callout2Text: string | undefined
      callout3Text: string | undefined
      callout4Text: string | undefined
      callout1Image: GatsbyImageProps | undefined
      callout2Image: GatsbyImageProps | undefined
      callout3Image: GatsbyImageProps | undefined
      callout4Image: GatsbyImageProps | undefined
    }
    acfHomePageBanners: {
      bottomBannerText: string | undefined
      topBannerText1: string | undefined
      topBannerText2: string | undefined
      topBannerText3: string | undefined
    }
    acfHomePageBottles: {
      hmbContent: string | undefined
      hmbTitle: string | undefined
      hmbBottleImage: GatsbyImageProps | undefined
      hmbIcon1: GatsbyImageProps | undefined
      hmbIcon2: GatsbyImageProps | undefined
      hmbIcon3: GatsbyImageProps | undefined
      selectContent: string | undefined
      selectTitle: string | undefined
      selectBottleImage: GatsbyImageProps | undefined
      selectIcon1: GatsbyImageProps | undefined
      selectIcon2: GatsbyImageProps | undefined
      selectIcon3: GatsbyImageProps | undefined
    }
    acfContactPageContent: {
      contactPageHeader: string | undefined
      contactPageContent: string | undefined
    }
    acfContactPageHeaderImage: {
      contactPageHeaderImage: GatsbyImageProps | undefined
    }
    acfProductsPageHMB: {
      hmbImage: GatsbyImageProps | undefined
      hmbTitle: string | undefined
      hmbIcon1: GatsbyImageProps | undefined
      hmbItem1: string | undefined
      hmbIcon2: GatsbyImageProps | undefined
      hmbItem2: string | undefined
      hmbIcon3: GatsbyImageProps | undefined
      hmbItem3: string | undefined
      hmbIcon4: GatsbyImageProps | undefined
      hmbItem4: string | undefined
    }
    acfProductsPageSparkling: {
      sparklingImage: GatsbyImageProps | undefined
      sparklingTitle: string | undefined
      sparklingIcon1: GatsbyImageProps | undefined
      sparklingItem1: string | undefined
      sparklingIcon2: GatsbyImageProps | undefined
      sparklingItem2: string | undefined
      sparklingIcon3: GatsbyImageProps | undefined
      sparklingItem3: string | undefined
      sparklingIcon4: GatsbyImageProps | undefined
      sparklingItem4: string | undefined
    }
    acfProductsPageSelect: {
      selectImage: GatsbyImageProps | undefined
      selectTitle: string | undefined
      selectIcon1: GatsbyImageProps | undefined
      selectItem1: string | undefined
      selectIcon2: GatsbyImageProps | undefined
      selectItem2: string | undefined
      selectIcon3: GatsbyImageProps | undefined
      selectItem3: string | undefined
      selectIcon4: GatsbyImageProps | undefined
      selectItem4: string | undefined
    }
    acfProductsPageBanner: {
      bannerText: string | undefined
    }
    acfProductsPageCallouts: {
      productsCallout1Image: GatsbyImageProps | undefined
      productsCallout1Text: string | undefined
      productsCallout2Image: GatsbyImageProps | undefined
      productsCallout2Text: string | undefined
      productsCallout3Image: GatsbyImageProps | undefined
      productsCallout3Text: string | undefined
      productsCallout4Image: GatsbyImageProps | undefined
      productsCallout4Text: string | undefined
    }
    acfAboutContent: {
      aboutFeaturedImage: GatsbyImageProps | undefined
      aboutPanel1Content: string | undefined
      aboutPanel1Header: string | undefined
      aboutPanel2Content: string | undefined
      aboutPanel2Header: string | undefined
      aboutPanel2Image1: GatsbyImageProps | undefined
      aboutPanel2Image2: GatsbyImageProps | undefined
      aboutPanel2Image3: GatsbyImageProps | undefined
      aboutPanel2Image4: GatsbyImageProps | undefined
    }
    acfScienceContent: {
      scienceHeaderVideo: string | undefined
      sciencePanel1Title: string | undefined
      sciencePanel1Content: string | undefined
      sciencePanel1Image: GatsbyImageProps | undefined
      sciencePanel2Quote: string | undefined
      sciencePanel2Quotee: string | undefined
      sciencePanel3Icon: GatsbyImageProps | undefined
      sciencePanel3Image: GatsbyImageProps | undefined
      sciencePanel3LargeTitle: string | undefined
      sciencePanel3SmallTitle: string | undefined
      sciencePanel3Content: string | undefined
      scienceBottomBanner: string | undefined
      sciencePanel4Title: string | undefined
      sciencePanel4Content: string | undefined
      sciencePanel4Image1: GatsbyImageProps | undefined
      sciencePanel4Image2: GatsbyImageProps | undefined
      sciencePanel4Image3: GatsbyImageProps | undefined
    }
    acfSustainabilityContent: {
      sustainabilityHeaderLargeImage: GatsbyImageProps | undefined
      sustainabilityHeaderSmallImage: GatsbyImageProps | undefined
      sustainabilityPanel1Image: GatsbyImageProps | undefined
      sustainabilityPanel1Title: string | undefined
      sustainabilityPanel1Subhead: string | undefined
      sustainabilityPanel1Content: string | undefined
      sustainabilityPanel2Icon: GatsbyImageProps | undefined
      sustainabilityPanel2Image: GatsbyImageProps | undefined
      sustainabilityPanel2Title: string | undefined
      sustainabilityPanel2Subhead: string | undefined
      sustainabilityPanel2Content: string | undefined
      sustainabilityPanel3Title: string | undefined
      sustainabilityPanel3Subhead: string | undefined
      sustainabilityPanel3Content: string | undefined
      sustainabilityPanel3Icon: GatsbyImageProps | undefined
      sustainabilityPanel3Image: GatsbyImageProps | undefined
    }
    acfWaterPageCallouts: {
      waterCallout1Text: string | undefined
      waterCallout1Image: GatsbyImageProps | undefined
      waterCallout2Text: string | undefined
      waterCallout2Image: GatsbyImageProps | undefined
      waterCallout3Text: string | undefined
      waterCallout3Image: GatsbyImageProps | undefined
      waterCallout4Text: string | undefined
      waterCallout4Image: GatsbyImageProps | undefined
    }
    acfWaterPageTopBanner: {
      waterBannerTitle: string | undefined
      waterBannerText1: string | undefined
      waterBannerValue1: string | undefined
      waterBannerIcon1: GatsbyImageProps | undefined
      waterBannerText2: string | undefined
      waterBannerValue2: string | undefined
      waterBannerIcon2: GatsbyImageProps | undefined
      waterBannerText3: string | undefined
      waterBannerValue3: string | undefined
      waterBannerIcon3: GatsbyImageProps | undefined
    }
    acfWaterPagePanel1: {
      waterPanel1Title: string | undefined
      waterPanel1Subtitle: string | undefined
      waterPanel1Content: string | undefined
      waterPanel1FeaturedImage: GatsbyImageProps | undefined
      waterPanel1Icon: GatsbyImageProps | undefined
    }
    acfWaterPagePanel2: {
      waterPanel2Title: string | undefined
      waterPanel2Subtitle: string | undefined
      waterPanel2Content: string | undefined
      waterPanel2FeaturedImage: GatsbyImageProps | undefined
      waterPanel2Icon: GatsbyImageProps | undefined
    }
    acfWaterPagePanel3: {
      waterPanel3Title: string | undefined
      waterPanel3Subtitle: string | undefined
      waterPanel3Content: string | undefined
      waterPanel3FeaturedImage: GatsbyImageProps | undefined
      waterPanel3Icon: GatsbyImageProps | undefined
    }
    acfWaterPageBottomBanner: {
      waterBottomBannerTitle: string | undefined
      waterBottomBannerText: string | undefined
      waterBottomBannerCta: {
        url: string
        title: string
      }
      waterBottomBannerIcon: GatsbyImageProps | undefined
    }
  }
}
