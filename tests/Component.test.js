import { describe, expect, it, vi } from "vitest";
import { shallowMount } from "@vue/test-utils";

// import { main } from "../main.js";

import Component from "../Component.vue";

vi.mock("../mock.js");
vi.mock("../importAlias");

describe("mock repro", () => {
  it("mocks a non-aliased Function", async () => {
    const wrapper = await shallowMount(Component);

    console.log(wrapper.html());
  });
});
