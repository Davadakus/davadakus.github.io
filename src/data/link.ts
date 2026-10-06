import type { IconType } from "react-icons";
import {
  FaXTwitter,
  FaYoutube,
  FaGlobe,
  FaGithub,
  FaLinkedin,
  FaItchIo,
} from "react-icons/fa6";

interface LinkInfo {
  name: string;
  icon: IconType;
}

// Hostnames are matched exactly or as a parent domain (e.g. "user.itch.io" matches "itch.io")
const LinkInfos: ({ hosts: string[] } & LinkInfo)[] = [
  { hosts: ["twitter.com", "x.com"], name: "Twitter", icon: FaXTwitter },
  { hosts: ["youtube.com", "youtu.be"], name: "YouTube", icon: FaYoutube },
  { hosts: ["github.com"], name: "GitHub", icon: FaGithub },
  { hosts: ["linkedin.com"], name: "LinkedIn", icon: FaLinkedin },
  { hosts: ["itch.io"], name: "itch.io", icon: FaItchIo },
];

const Fallback: LinkInfo = { name: "Website", icon: FaGlobe };

export function getLinkInfo(url: string): LinkInfo {
  let hostname: string;
  try {
    hostname = new URL(url).hostname;
  } catch {
    return Fallback;
  }

  const match = LinkInfos.find(({ hosts }) =>
    hosts.some((host) => hostname === host || hostname.endsWith(`.${host}`))
  );
  return match ?? Fallback;
}
