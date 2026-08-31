import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };

// query for homepage data ============================================================
const HOMEPAGE_QUERY = `*[_type == "homepage"][0] {
  _id,
  _createdAt,
  title,
  description,
  btntext,
  OwnerName,
  OwnerBio1,
  OwnerBio2,
  btn2Text,
  quote,
  quoteAuthor,
}`;

const CARDS_QUERY = `*[_type == "homepage"][0] {
  card1Title, card1Description,
  card2Title, card2Description,
  card3Title, card3Description,
  card4Title, card4Description
}`;

type Homepage = {
  title: string;
  description: string;
  btntext: string;
  OwnerName: string;
  OwnerBio1: string;
  OwnerBio2: string;
  btn2Text: string;
  quote: string;
  quoteAuthor: string;
};

export const fetchHomepageData = async () => {
  let data;
  try {
    data = await client.fetch<Homepage>(HOMEPAGE_QUERY, {}, options);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    data = {
      title: "",
      description: "",
      btntext: "",
      OwnerName: "",
      OwnerBio1: "",
      OwnerBio2: "",
      btn2Text: "",
      quote: "",
      quoteAuthor: "",
    }; // fallback
  }
  return data;
};

export const fetchHomepageCardsData = async () => {
  let data;
  try {
    data = await client.fetch(CARDS_QUERY, {}, options);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    data = {
      card1Title: "",
      card1Description: "",
      card2Title: "",
      card2Description: "",
      card3Title: "",
      card3Description: "",
      card4Title: "",
      card4Description: "",
    }; // fallback
  }
  return data;
};

// query for aboutme page data ========================================================

const ABOUTMEPAGE_QUERY = `*[_type == "aboutpage"][0] {
  _id,
  _createdAt,
  title,
  paragraphTitle,
  paragraph1,
  paragraph2,
  myProffesionalExperienceTitle,
  myProffesionalExperienceDescription,
  myPhilosophyTitle,
  myPhilosophyDescription,
}`;

type Aboutmepage = {
  title: string;
  paragraphTitle: string;
  paragraph1: string;
  paragraph2: string;
  myProffesionalExperienceTitle: string;
  myProffesionalExperienceDescription: string;
  myPhilosophyTitle: string;
  myPhilosophyDescription: string;
};

export const fetchAboutmePageData = async () => {
  let data;
  try {
    data = await client.fetch<Aboutmepage>(ABOUTMEPAGE_QUERY, {}, options);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    data = {
      title: "",
      paragraphTitle: "",
      paragraph1: "",
      paragraph2: "",
      myProffesionalExperienceTitle: "",
      myProffesionalExperienceDescription: "",
      myPhilosophyTitle: "",
      myPhilosophyDescription: "",
    }; // fallback
  }
  return data;
};
