import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import { shallow } from 'enzyme';
import App from './App';
import Header from './Header';
import List from './List';

describe("App", () => {
  let props;
  let app;
  const getApp = () => {
    if (!app) {
      app = mount(
        <App {...props} />
      );
    }
    return app;
  }

  beforeEach(() => {
    props = {
      number: undefined,
      text: undefined,
      boolean: undefined,
      array: undefined,
      object: undefined,
    };
    app = undefined;
  });

  // All tests will go here
  it("always renders App", () => {
    const divs = getApp().find(".App");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a `Header`", () => {
    expect(getApp().find(Header).length).toBe(1);
  });

  describe("Boolean", () => {
    describe("when 'boolean' is true", () => {
      beforeEach(() => {
        props.boolean = true;
      });

      it("renders `.App-logo`", () => {
        expect(getApp().find('.App-logo').length).toBe(1);
      });
    });

    describe("when 'boolean' is false", () => {
      beforeEach(() => {
        props.boolean = false;
      });

      it("does not render `.App-logo`", () => {
        expect(getApp().find('.App-logo').length).toBe(0);
      });
    });
  });

  describe("Text", () => {
    describe("when `text` is defined", () => {
      beforeEach(() => {
        props.text = "Placeholder text";
      });

      it("renders `.App-intro`", () => {
        expect(getApp().find('.App-intro').length).toBe(1);
      });

      it("passes `text` to the rendered `.App-intro` as `children`", () => {
        const paragraph = getApp().find('.App-intro');
        expect(paragraph.props().children).toBe(props.text);
      });
    });

    describe("when `text` is NOT defined", () => {
      beforeEach(() => {
        props.text = undefined;
      });

      it("does not render `.App-intro`", () => {
        expect(getApp().find('.App-intro').length).toBe(0);
      });
    });
  });

  describe("Array", () => {
    describe("when `array` is defined", () => {
      beforeEach(() => {
        props.array = [
          "Item 1",
          "Item 2",
          "Item 3"
        ];
      });

      it("renders 'List' component", () => {
        expect(getApp().find(List).length).toBe(1);
      });
    });

    describe("when `array` is not defined", () => {
      beforeEach(() => {
        props.array = undefined;
      });

      it("Does not render 'List' component", () => {
        expect(getApp().find(List).length).toBe(0);
      });

      it("renders a text warning", () => {
        expect(getApp().find('.no-list-warning').length).toBe(1);
      });
    });
  });

  describe("Object", () => {
    describe("when `object` is defined", () => {
      beforeEach(() => {
        props.object = {
          title:  "Placeholder title",
          content: "Placeholder content"
        };
      });

      it("renders 'object-div'", () => {
        expect(getApp().find('.object-div').length).toBe(1);
      });

      describe("when there's a title property", () => {
        beforeEach(() => {
          props.object = {
            title:  "Placeholder title",
          };
        });

        it("Renders an 'h2'", () => {
          const objectDiv = getApp().find('.object-div');
          expect(objectDiv.find('h2').length).toBe(1);
        });
      });

      describe("when there's NOT a title property", () => {
        beforeEach(() => {
          props.object = {
            title: undefined,
          };
        });

        it("Does not render an 'h2'", () => {
          const objectDiv = getApp().find('.object-div');
          expect(objectDiv.find('h2').length).toBe(0);
        });
      });

      describe("when there's a content property", () => {
        beforeEach(() => {
          props.object = {
            content:  "Placeholder content",
          };
        });

        it("Renders an 'p'", () => {
          const objectDiv = getApp().find('.object-div');
          expect(objectDiv.find('p').length).toBe(1);
        });
      });

      describe("when there's NOT a content property", () => {
        beforeEach(() => {
          props.object = {
            content: undefined,
          };
        });

        it("Does not render an 'p'", () => {
          const objectDiv = getApp().find('.object-div');
          expect(objectDiv.find('p').length).toBe(0);
        });
      });
    });

    describe("when `object` is not defined", () => {
      beforeEach(() => {
        props.object = undefined;
      });

      it("Does not render 'object-div'", () => {
        expect(getApp().find('.object-div').length).toBe(0);
      });

      it("renders a text warning", () => {
        expect(getApp().find('.no-list-warning').length).toBe(1);
      });
    });
  });

});
