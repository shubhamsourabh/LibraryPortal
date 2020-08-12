import React from "react";
import ReactDOM from "react-dom";
import { mount } from "enzyme";
import { MemoryRouter } from "react-router";
//import LandingPage from "../landingpage/LandingPage";
import Login from "../login/Login";
import PageNotFound from "../error/PageNotFound";
import App from "../App";

test("invalid path should redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/random"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(0);
  expect(wrapper.find(PageNotFound)).toHaveLength(1);
});

test("valid path should not redirect to 404", () => {
  const wrapper = mount(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
  expect(wrapper.find(Login)).toHaveLength(1);
  expect(wrapper.find(PageNotFound)).toHaveLength(0);
});
