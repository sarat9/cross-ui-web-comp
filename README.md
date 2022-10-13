
# cross-ui-web-comp
Using Web Components in different Cross UI frontend frameworks


#### Repo showcases
- Using Web Components in different Cross UI frontend frameworks
- Using React Web Componnets within React
- Using React components in a ember app

#


## Application Architecture

The application consists of 2 different frontends

-   [react-web-components](https://github.com/sarat9/cross-ui-web-comp/tree/master/react-web-components) - React Web Components
-   [frontend-ember](https://github.com/sarat9/cross-ui-web-comp/tree/master/frontend-ember) - Basic Frontend Ember.js App uses web components of React

In the above code, **react-web-components** has a web component called *FancyButton* which is written in React.js. We will be bundling the component and will import and use it in different frameworks like Ember.

> This shows by using a common libary components across teams in a company or community, multiple UI appications can use components developed in different programming languages and frameworks..


#
#
#

# Web Components

> “Good frontend development is hard. Scaling frontend development so that many teams can work simultaneously on a large and complex product is even harder.” Martin Fowler


### Problem
At the beginning of a project you always pick a framework and you build your entire project around it.
- What if you want to migrate your app to a latest tech?
- What if you want to use a latest tech component in your traditiona app?
- What if you want to integrate any apps together for a shared responsibility? 

### What is a Web Component?
The core concept of a Web Component is similar to that of components in frameworks such as React, Angular or Vue. 
It is a reusable UI building block that encapsulates all the HTML, CSS and any JavaScript-based logic required to render it. 

The big difference is that instead of relying on a specific JavaScript framework it leverages technologies natively provided by the browser so that your Web Components are framework agnostic. 

Web components are a set of web platform APIs that allow you to create new custom, reusable, encapsulated HTML tags to use in web pages and web apps. 

Custom components and widgets build on the Web Component standards, will work across modern browsers, and can be used with any JavaScript library or framework that works with HTML.

- [webcomponents.org](https://www.webcomponents.org/introduction#specifications)
- [Everything You Need to Know About Web Components](https://medium.com/rangle-io/everything-you-need-to-know-about-web-components-part-1-ced95964fbe6)
- [Why I’m Betting on Web Components (and You Should Think About Using Them Too)](https://gilfink.medium.com/why-im-betting-on-web-components-and-you-should-think-about-using-them-too-8629396e27a)

##

### Why Web Component?**

- Web Components can be used with any JavaScript library or framework that works with HTML.
- Functionality encapsulated away from the rest of your code.
- Web Components allows you to adopt to the ever evolving JavaScript frameworks landscape.
- Reusability: Once created, web components can be imported, used and reused in applications
- Declaration: You can more easily declare components on your page with your own custom tags.
- Scoping: Shadow DOM ensures DOM and CSS scoping so that styles don’t leak out and component DOM is local. Avoids any collisions between outside JavaScript or CSS.
- Brand consistency: Having your front-end application code split up into component libraries or even design systems can ensure brand consistency through the company. It also provides an additional benefit of the ability to be used by all teams, regardless of tech stack
- Cost-efficiency: Developers will have the ability to focus solely on making native reusable components, similar to LEGOs, and use these blocks in other applications across teams, which in the end saves money
- Faster deployments: Having ready-made code blocks, developers will be able to build and deploy applications more quickly. This leads to less time devoted to developing new features
- Quality improvement: As a by-product of reusing and reviewing the same code multiple times, the overall quality will improve in the course of time.

##

#### Libraries for building web components
Many libraries already exist that make it easier to build native web components
- Polymer provides a set of features for creating custom elements.
- Slim.js provides data-binding and extended capabilities for components, using es6 native class inheritance.
- Stencil generates standards-compliant web components.
- Hybrids is a UI library for creating Web Components.



##


# Bundle specific component
use this to bundle specific web component and import that bundled file in other frameworks.
```
npm i parcel
parcel build path/component.js
```

##

### Libraries used
- [reactToWebComponent - Github](https://github.com/bitovi/react-to-webcomponent)


##

# Src and Ref:

### React Web components
- [React Docs - Using Web Components in React](https://reactjs.org/docs/web-components.html)

### Web Components
- [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
- [webcomponents.org](https://www.webcomponents.org/introduction#specifications)
- [Everything You Need to Know About Web Components](https://medium.com/rangle-io/everything-you-need-to-know-about-web-components-part-1-ced95964fbe6)
- [Why I’m Betting on Web Components (and You Should Think About Using Them Too)](https://gilfink.medium.com/why-im-betting-on-web-components-and-you-should-think-about-using-them-too-8629396e27a)
- [The Story of Web Components - Youtube](https://www.youtube.com/watch?v=fKqgdT-KLrM)
- [Introduction to Web Components](https://medium.com/sciforce/introduction-to-web-components-84e6507382fc)
- [Web Components Basics and Performance Benefits](https://medium.com/@spkamboj/web-components-basics-and-performance-benefits-f7537c908075)
- [Shadow DOM](https://www.youtube.com/watch?v=K5i9zMzVlzM)



### Implementing Web Components
- [How to: Create a web component in ReactJS](https://medium.com/javascript-by-doing/how-to-create-a-web-component-in-reactjs-62b71116ea36)
- 

### Build Webcomponents using reactToWebComponent
- [reactToWebComponent - Github](https://github.com/bitovi/react-to-webcomponent)
- [reactToWebComponent - Sandbox Code](https://codesandbox.io/s/react-to-webcomponent--basic-vqs8cl)
- [reactToWebComponent - YouTube](https://www.youtube.com/watch?v=PUGDzA1uP-Y)

### Build Webcomponents using plain javascript wrapping
- [Wrapping React Components Inside Custom Elements](https://gilfink.medium.com/wrapping-react-components-inside-custom-elements-97431d1155bd)


##

