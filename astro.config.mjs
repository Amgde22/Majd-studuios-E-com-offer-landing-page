import { defineConfig , passthroughImageService} from "astro/config";
import icon from "astro-icon";
import i18n from "@astrolicious/i18n";
import sitemap from "@astrojs/sitemap";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  image:{
    service:passthroughImageService()
  },
  site: "https://www.majd-studios.pages.dev", // update me!
  integrations: [
    icon(),
    tailwind(),
    i18n({
      defaultLocale: "en",
      locales: ["fr", "en","ar"],
      client: {
        data: true,
        paths: true,
      },
      // used to localize the routes
      pages: {
				"/about": {
					fr: "/a-propos",
				}
			},
    }),
    sitemap(),
  ],
});
