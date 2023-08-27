# Structure

This style guide is mostly based on the standards that are currently prevalent in Typescript. Let's discuss if you have better idea on how to improve it.

```
├── docs
│   ├──  style-guide.md
├── shared
│   ├── ui  # store all component common here
│   │   ├── src
│   │   │      └── Loading.tsx
│   │   │      └── index.ts
│   │   ├── tsconfig.json
│   │   ├── project.json
│   │   ├── .eslintrc.json
│   │   ├── ....
│   ├── hooks  # store all hook common here
│   │   ├── src
│   │   │      └── useLatest.tsx
│   │   │      └── index.ts
│   │   ├── ....
│   ├── utils  # store utils common here
├── src
│   ├── __tests__
│   │   ├── intergration
│   │   ├── utils
│   │   │      └── utils
│   │   │           └── date.spec.ts
│   ├── assets          # folder to store assets
│   │   ├── svgs    # folder to svgs
│   │   │      └── ic-sun.svg
│   │   └── images      # folder to images
│   ├── configs          # folder to configs
│   │   ├── locales    # folder to locales
│   │   └── theme      # folder to theme
│   │   ├── antd.ts    # folder to config antd
│   │   └── ...
│   ├── pages          # folder to store all the pages
│   │   └── account
│   │   │   ├── info.tsx
│   │   └── forgot-password.tsx # use title-case for pages
│   ├── services # handle business logic
│   │   └── user-defined-layer
│   │   │   ├── user-defined-layer.ts # use title-case for service
│   │   │   ├── line-string.ts
│   │   │   ├── popup.ts
│   │   │   ├── factories.ts
│   │   │   ├── symbol.ts
│   │   └── profile-feed.ts
│   ├── shared          # folder to shared
│   │   ├── components
│   │   │   └── commmon # use PascalCase for component ( component )
│   │   │       └── Loading.tsx
│   │   │   └── forms
│   │   │       └── EditForm.tsx
│   │   │   └── modals # store all modal here
│   │   │       └── ManageUserModal.tsx
│   │   │   └── selectors  # store all selector here
│   │   │       └── UserSelector.tsx
│   │   │   └── user  # store all component for module user
│   │   │       └── UserInfo.tsx
│   │   │   └── layouts  # store all layout here
│   │   │       └── PrivateLayouts.tsx
│   │   │   └── ...
│   │   ├── hooks
│   │   │   └── useCounter.ts
│   │   │   └── useAsync.ts
│   │   │   └── ...
│   │   ├── constants
│   │   │   └── name.ts
│   │   ├── types
│   │   │   └── i18next.d.ts
│   │   │   └── vite-env.d.ts
│   │   │   └── ...
│   │   ├── utils # Use camelCase for file in this folder
│   │   │   └── date.ts
│   │   │   └── formatGeometry.ts
│   │   │   └── ...
│   └── App.tsx      # App entry point
│   └── main.tsx     # main entry point
├── .gitignore
├── package.json
└── README.md
└── ...
```
