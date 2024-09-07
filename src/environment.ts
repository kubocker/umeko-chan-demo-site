
type Env = {
  app: {
    url: string;
  },
  embed: {
    url: string;
  },
  service: {
    developer: {
      name: string;
      homePage: string;
      email:  string;
      postcode: string;
      address: string;
      phoneNumber: string;
    }
  },
  paymentLinks: {
    stripe: {
      cafe: string;
      book: string;
      game: string;
    }
  }
}



export const environment: Env = {
  app: {
    url: import.meta.env.VITE_HAGURUMA_EMBED_URL!,
  },
  embed: {
    url: import.meta.env.VITE_HAGURUMA_EMBED_URL!,
  },
  service: {
    developer: {
      name: import.meta.env.VITE_SERVICE_DEVELOPER_NAME!,
      homePage: import.meta.env.VITE_SERVICE_DEVELOPER_HOMEPAGE!,
      email:  import.meta.env.VITE_SERVICE_DEVELOPER_EMAIL!,
      postcode: import.meta.env.VITE_SERVICE_DEVELOPER_POSTCODE!,
      address: import.meta.env.VITE_SERVICE_DEVELOPER_ADDRESS!,
      phoneNumber: import.meta.env.VITE_SERVICE_DEVELOPER_PHONENUMBER!,
    }
  },
  paymentLinks: {
    stripe: {
      cafe: import.meta.env.VITE_PUBLIC_STRIPE_PAYMENT_LINK_CAFE_URL!,
      book: import.meta.env.VITE_PUBLIC_STRIPE_PAYMENT_LINK_BOOK_URL!,
      game: import.meta.env.VITE_PUBLIC_STRIPE_PAYMENT_LINK_GAME_URL!,
    }
  }
}
