import React from "react";
import { PasswordRecovering } from "../../../features/passwordRecovering/PasswordRecovering";
import { Profile } from "../../../features/profile/Profile";
import { Registration } from "../../../features/registration/Registration";
import { Routes, Route, Navigate } from "react-router-dom";
import TestPage from "../../../features/testPage/TestPage";
import Error404 from "../../error404/Error404";
import { NewPassword } from "../../../features/newPassword/NewPassword";
import { Login } from "../../../features/login/Login";
import { PacksTableContainer } from "../../../features/packsTable/PacksTableContainer";
import { CardsTable } from "../../../features/cardsTable/CardsTable";
import { CheckEmail } from "../../../features/checkEmail/CheckEmail";
import { CardLearn } from "../../../features/cardLearn/CardLearn";

export const PATH = {
  LOGIN: "/login",
  REGISTRATION: "/registration",
  PROFILE: "/profile",
  ERROR404: "/error404",
  PASSWORD_RECOVERING: "/password-recovery",
  NEW_PASSWORD: "/set-new-password/:token",
  TEST_PAGE: "/testPage",
  CHECK_EMAIL: "/check-email",
  PACKS_LIST: "/packs-list",
  CARDS_LIST: "/cards-list",
  CARD_LEARN: "/learn/:packID",
};

export const RoutesConstants: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Navigate to={PATH.LOGIN} />} />
        <Route path={PATH.LOGIN} element={<Login />} />
        <Route path={PATH.REGISTRATION} element={<Registration />} />
        <Route path={PATH.PROFILE} element={<Profile />} />
        <Route path={PATH.ERROR404} element={<Error404 />} />
        <Route
          path={PATH.PASSWORD_RECOVERING}
          element={<PasswordRecovering />}
        />
        <Route path={PATH.NEW_PASSWORD} element={<NewPassword />} />
        <Route path={PATH.TEST_PAGE} element={<TestPage />} />
        <Route path={"/*"} element={<Error404 />} />
        <Route path={PATH.CHECK_EMAIL} element={<CheckEmail />} />
        <Route path={PATH.PACKS_LIST} element={<PacksTableContainer />} />
        <Route path={PATH.CARDS_LIST} element={<CardsTable />} />
        <Route path="learn/:id" element={<CardLearn />} />
      </Routes>
    </div>
  );
};
