import person1_1x from "../../images/team/person1.jpg";
import person1_2x from "../../images/team/person1@2x.jpg";
import person1Webp1x from "../../images/team/person1.webp";
import person1Webp2x from "../../images/team/person1@2x.webp";

import person2_1x from "../../images/team/person2.jpg";
import person2_2x from "../../images/team/person2@2x.jpg";
import person2Webp1x from "../../images/team/person2.webp";
import person2Webp2x from "../../images/team/person2@2x.webp";

import person3_1x from "../../images/team/person3.jpg";
import person3_2x from "../../images/team/person3@2x.jpg";
import person3Webp1x from "../../images/team/person3.webp";
import person3Webp2x from "../../images/team/person3@2x.webp";

export {
    person1_1x, person1_2x, person1Webp1x, person1Webp2x,
    person2_1x, person2_2x, person2Webp1x, person2Webp2x,
    person3_1x, person3_2x, person3Webp1x, person3Webp2x,
};

export const people = [
    {
        src: person1_1x,
        srcSet: `${person1_1x} 1x, ${person1_2x} 2x`,
        webpsrcset: `${person1Webp1x} 1x, ${person1Webp2x} 2x`,
        alt: "John Doe, president of company",
        name: "John Doe",
        position: "President",
    },
    {
        src: person2_1x,
        srcSet: `${person2_1x} 1x, ${person2_2x} 2x`,
        webpsrcset: `${person2Webp1x} 1x, ${person2Webp2x} 2x`,
        alt: "Jane Doe, Vice President of company",
        name: "Jane Doe",
        position: "Vice President",
    },
    {
        src: person3_1x,
        srcSet: `${person3_1x} 1x, ${person3_2x} 2x`,
        webpsrcset: `${person3Webp1x} 1x, ${person3Webp2x} 2x`,
        alt: "Steve Smith, Marketing Head",
        name: "Steve Smith",
        position: "Marketing Head",
    },
];
