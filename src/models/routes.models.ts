const HOME = "/";
const PORTFOLIO = "portfolio";

export const ROOT_ROUTES = {
  HOME,
  PORTFOLIO,
};

export const PORTFOLIO_ROUTES = {
  ABOUTME: `aboutme`,
  EXPERIENCE: `experience`,
  RESUME: `resume`,
  SKILLS: `skills`,
};

export const NAVIGATION_ROUTES = {
  ROOT: {
    HOME,
    PORTFOLIO,
  },
  PORTFOLIO: {
    ABOUTME: `${PORTFOLIO}/aboutme`,
    EXPERIENCE: `${PORTFOLIO}/experience`,
    RESUME: `${PORTFOLIO}/resume`,
    SKILLS: `${PORTFOLIO}/skills`,
  },
};
