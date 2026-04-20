import { Icon } from "astro-icon/components";

export const iconMap = {
    google: {
      name: "google-color",
      label: "Google",
      padding:0
    },
    chatgpt: {
      name: "chatgpt",
      label: "ChatGPT",
      color:"white",
      background:"#10A37F",
    },
    facebook: {
      name: "facebook",
      label: "",
      padding:0,
      marginBottom:"16px",
      scale:1.2

    },
    instagram:{
      name: "instagram",
      label: "",
      padding:0,
      marginBottom:"16px"
    }
  };




  export function parseWithIcons(text) {
    const parts = text.split(/\[([^\]]+)\]/g);
  
    return parts.map((part) => {
      const token = part.toLowerCase();
      if (iconMap[token]) {
        return { type: "icon", token, ...iconMap[token] };
      }
      return { type: "text", value: (part + " ")};
    });
  }
  