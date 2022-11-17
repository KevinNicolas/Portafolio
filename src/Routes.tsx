import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useSearchParams } from "react-router-dom";

import { Header } from "@components";
import { NAVIGATION_ROUTES, PORTFOLIO_ROUTES } from "@models";
import { AboutMe, Experience, Home, Resume, Root, Skills } from "@pages";
import { useThemeStore } from "@store/theme";

export const Router = () => (
  <BrowserRouter>
    <Pages />
  </BrowserRouter>
);

const Pages = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path={`${NAVIGATION_ROUTES.ROOT.PORTFOLIO}/*`} element={<Portfolio />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { setThemeByProfile } = useThemeStore();

  const checkProfileParam = () => {
    const paramProfile = searchParams.get("profile");
    if (paramProfile && ["react", "vue"].includes(paramProfile)) {
      setSearchParams(`profile=${paramProfile}`);
      setTimeout(() => setThemeByProfile(paramProfile as any), 1);
      return;
    }

    setSearchParams("profile=react");
    setThemeByProfile("react");
  };

  useEffect(() => checkProfileParam(), []);

  useEffect(() => {
    checkProfileParam();
  }, [searchParams]);

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Navigate replace to={PORTFOLIO_ROUTES.RESUME} />} />
        <Route path={PORTFOLIO_ROUTES.ABOUTME} element={<AboutMe />} />
        <Route path={PORTFOLIO_ROUTES.EXPERIENCE} element={<Experience />} />
        <Route path={PORTFOLIO_ROUTES.RESUME} element={<Resume />} />
        <Route path={PORTFOLIO_ROUTES.SKILLS} element={<Skills />} />
        <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </>
  );
};
