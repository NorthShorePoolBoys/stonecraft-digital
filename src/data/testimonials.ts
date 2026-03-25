export interface Testimonial {
  name: string;
  town: string;
  service: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Michael R.",
    town: "Wakefield, MA",
    service: "Paver Patio",
    text: "We hired New England Pavers & Stone for a 600 sq ft patio with a built-in fire pit. The crew showed up on time every day, kept the site clean, and the finished product is better than what we saw in the 3D render. Two years in and not a single shifted paver.",
    rating: 5,
  },
  {
    name: "Sarah T.",
    town: "Melrose, MA",
    service: "Retaining Wall & Walkway",
    text: "Our backyard had a severe slope that made half the yard unusable. They built a two-tier retaining wall with a bluestone walkway connecting the upper patio to the lower garden. The drainage work they did behind the wall was impressive — no water issues even after heavy rain.",
    rating: 5,
  },
  {
    name: "James K.",
    town: "Reading, MA",
    service: "Front Walkway",
    text: "Replaced our crumbling concrete front walk with a Techo-Bloc paver walkway and granite steps. The curb appeal difference is night and day. The owner walked us through every material option and never pushed the expensive stuff unless it made sense.",
    rating: 5,
  },
  {
    name: "Linda M.",
    town: "Stoneham, MA",
    service: "Chimney Rebuild",
    text: "Our chimney was deteriorating badly after years of New England winters. They rebuilt it from the roofline up with matching brick, new flashing, and a proper crown. Clean work, fair price, and done in three days. The chimney looks better than it did when the house was built.",
    rating: 5,
  },
  {
    name: "David P.",
    town: "Winchester, MA",
    service: "Outdoor Living Space",
    text: "Full outdoor kitchen with granite countertops, a Belgard paver patio, and a gas fire pit. This was a big project and they managed every detail — gas line coordination, electrical, drainage. We use the space from April through November now.",
    rating: 5,
  },
  {
    name: "Karen W.",
    town: "Lexington, MA",
    service: "Driveway",
    text: "After 20 years of repaving asphalt every 8 years, we finally went with a paver driveway. The base prep was extensive — they dug down over a foot and compacted in layers. Three winters in, including some brutal freeze-thaw cycles, and the driveway looks exactly like the day it was installed.",
    rating: 5,
  },
];
