import FirstInput from "@/components/FirstInput.vue";
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it } from 'vitest'

describe("FirstInput", () => {

    let wrapper

    const mountWrapper = () => {
        wrapper = mount(FirstInput, {
            props: {
                value: "TestValue",
                label: "TestLabel",
                placeholder: "TestPlaceholder",
                backgroundColor: 'white',
                color: 'black',
            }
        })
    }

    beforeEach( async () => {
        mountWrapper();
        await wrapper.setData({ inputValue: "TestValue" });
    })

  it("renders with default props", () => {

    expect(wrapper.props().value).toBe("TestValue");
    expect(wrapper.props().label).toBe("TestLabel");
    expect(wrapper.props().placeholder).toBe("TestPlaceholder");
    expect(wrapper.props().backgroundColor).toBe('white');
    expect(wrapper.props().color).toBe('black');
    expect(wrapper.props().disabled).toBe(false);

  });

  it("emits input event on input change", async () => {
    await wrapper.setData({ inputValue: "NewTestValue" });
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input[0]).toEqual(["NewTestValue"]);
  });
});
