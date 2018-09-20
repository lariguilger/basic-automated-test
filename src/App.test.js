import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from "enzyme";
import App from './App';
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
    const divs = getApp().find("#App");
    expect(divs.length).toBeGreaterThan(0);
  });

  it("always renders a header", () => {
    expect(getApp().find(".app-header").length).toBe(1);
  });

  describe("Boolean", () => {
    describe("when 'boolean' is true", () => {
      beforeEach(() => {
        props.boolean = true;
      });

      it("renders `.app-img`", () => {
        expect(getApp().find('.app-img').length).toBe(1);
      });
    });

    describe("when 'boolean' is false", () => {
      beforeEach(() => {
        props.boolean = false;
      });

      it("does not render `.app-img`", () => {
        expect(getApp().find('.app-img').length).toBe(0);
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

  describe("Text", () => {
    describe("when `text` is defined", () => {
      beforeEach(() => {
        props.text = "Placeholder text";
      });

      it("renders `.app-heading`", () => {
        expect(getApp().find('.app-heading').length).toBe(1);
      });

      it("passes `text` to the rendered `.app-heading` as `children`", () => {
        const paragraph = getApp().find('.app-heading');
        expect(paragraph.props().children).toBe(props.text);
      });
    });

    describe("when `text` is NOT defined", () => {
      beforeEach(() => {
        props.text = undefined;
      });

      it("does not render `.app-heading`", () => {
        expect(getApp().find('.app-heading').length).toBe(0);
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
