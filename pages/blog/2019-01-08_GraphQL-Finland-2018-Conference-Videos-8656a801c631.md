---
title: GraphQL Finland 2018 Conference Videos
description: >-
  Although it’s a while since we organized GraphQL Finland, it’s not too late to
  recap the presentations of the conference.
date: '2019-01-08T13:52:27.503Z'
categories: []
keywords: []
slug: /@bebraw/2018-conference-videos-8656a801c631
---

![GraphQL Finland 2018 in progress](img/1__Fw77gTcsoHxSrEd7nDrRnw.jpeg)
GraphQL Finland 2018 in progress

Although it’s a while since we organized GraphQL Finland, it’s not too late to recap the presentations of the conference.

One of the great things about the conference was the wide variety of the topics covered within the theme of GraphQL technology. It was a lot to digest and I hope people got something to think about. I learned a lot at least!

#### Adopting GraphQL in Large Codebases — Adam Miskiewicz

Adam Miskiewicz on adopting GraphQL in a large organization

The conference started with a keynote about how to adopt GraphQL in a large organization by Adam Miskiewicz of Airbnb. In the talk, Adam shows how they transitioned to the technology and what value the transition brought.

#### Emerging uses of GraphQL for rapid application development — Ellie Day

Ellie Day on how to apply GraphQL for rapid application development

Ellie Day’s talk showcased different ways in which to apply GraphQL in application development. One of the insights for me was that if you go far enough, you can use the API to define the entire application, including the routing.

A dynamic approach like this allows you to run experiments with users more easily. It also has implications on architecture as you should hard-code less and instead rely more on configuration. As a result, layouts and components have to become loosely coupled and composable.

#### Going offline first with GraphQL — Kadi Kraman

Kadi Kraman on how to approach GraphQL in an offline environment

Kadi Kraman showed how to implement use GraphQL in an offline environment. The usage pattern is important especially if you are dealing with mobile devices and still want to provide good user experience. In the talk Kadi discusses how to implement caching to achieve this.

#### Life is hard and so is learning GraphQL — Carolyn Stransky

Carolyn Stransky on how to learn GraphQL and to write good documentation

Carolyn Stransky’s talk puts emphasis on learning GraphQL and how to write good documentation to begin with. The main insight for me is that it’s not enough to cover only the API. You should also cover different use cases as those help to understand how parts of the API operate together.

#### Building efficient, waterfall-free GraphQL applications — Jimmy Jia

Jimmy Jia on how to develop efficient, waterfall-free GraphQL applications

Jimmy Jia’s advanced talk on GraphQL shows pitfalls of different approaches and then discusses the current approach he prefers. The point is that with some design upfront, you can push request cost to the server and avoid round trips from the client.

#### Building tools for GraphQL — Glenn Reyes

Glenn Reyes on graphpack, a tool designed to bootstrap GraphQL APIs

Glenn Reyes’ talk focused on [graphpack](https://github.com/glennreyes/graphpack), a tool he created to make it fast to bootstrap a GraphQL server. It binds together multiple popular packages and provides them through a neat interface. The talk gives you a better idea of what’s included and how it all goes together.

#### (Un)expected use of GraphQL — Helen Zhukova

Helen Zhukova on replicating a database query layer on frontend using GraphQL

Helen Zhukova’s talk shows how replicating a database over GraphQL from backend to client can work. If an application is designed the right way, the same code should work in both environments with minimal changes although there are limitations to this due to environment restrictions.

#### End-to-end type-safety with GraphQL — Johannes Schickling

Johannes Schickling on how to achieve end-to-end type safety with GraphQL

One of the benefits of using GraphQL to describe your API is that it forces you to document its types. On top of this we get introspection, documentation, and ideally type-checking at the client. [graphqlgen](https://github.com/prisma/graphqlgen) was developed to address the last concern.

If you are using TypeScript, Flow, or Reason, graphqlgen allows you to write code that’s type-checked against your GraphQL resolvers. In this talk, Johannes Schickling shows how graphql achieves the task.

#### Real-time GraphQL with Event Sourcing — Andrew Rhyne

Andrew Rhyne on how to achieve real-time GraphQL using event sourcing

Andrew Rhyne deals with large scale GraphQL development that has real-time requirements. You’ll learn about his event sourcing based approach from the talk and the way it goes together.

#### Hidden gems of GraphQL query — Ivan Goncharov

Ivan Goncharov on the lesser known features of the GraphQL specification

Ivan Goncharov, one of the core contributors of GraphQL specification, discusses the hidden gems of GraphQL specification in his talk. There is likely functionality in the talk you didn’t know of yet.

#### Reason and GraphQL — Nik Graf

Nik Graf on how Reason and GraphQL go together

Nik Graf’s talk shows how GraphQL goes together with the emerging Reason programming language and what the typing system of Reason brings on the table.

#### graphql-php — Christoffer Niska

Christoffer Niska on GraphQL and PHP

Christoffer Niska’s talk shows how GraphQL goes together with the popular PHP programming language using [digiaonline/graphql-php](https://github.com/digiaonline/graphql-php) library.

#### Writing a real-time GraphQL backend as a compiler in Haskell — Tanmai Gopal

Tanmai Gopal on how to apply Haskell to provide a realtime GraphQL backend

Tanmai Gopal’s talk shows how to use the Haskell programming language to implement a performant, GraphQL based real-time backend.

#### Where art thou, my error? — Eloy Durán

Eloy Durán on error handling in GraphQL

One of the issues you come by when using GraphQL is error handling. There are several ways to do achieve it and Elon Durán discusses potential approaches in his talk.

#### Database-first GraphQL Development — Benjie Gillam

Benjie Gillam on the power of database-first approach for GraphQL APIs

Benjie Gillam’s talk begins from the realization that databases implement a lot of functionality these days. Then he shows how a database can be used as a source of truth and how a GraphQL API can be implemented on top of it by leveraging the strengths of the underlying technology.

Given usually people implement GraphQL APIs the other way around (interface first), it’s a refreshing viewpoint.

#### The Prehistory of GraphQL— Dan Schafer

Dan Schafer on the background that led to the birth of the GraphQL specification

Dan Schafer, one of the creators of the GraphQL specification at Facebook, discussed the prehistory of GraphQL in his endnote. If you are wondering why the specification covers certain concerns while omitting others, this is the talk for you.

#### Conclusion

The [videos are also available as a YouTube playlist](https://www.youtube.com/playlist?list=PLVSuvWb4Q2Y7oxwvpzlwFxAO6IbIjMDgB) in case you wish to watch them in row. I think we managed to attract a diverse range of speakers and topics and it shows in the talks.

> It’s a good chance to [get an early bird ticket for React Finland 2019 (24–26.04)](https://react-finland.fi/#tickets), the sister conference of GraphQL Finland. We also have combos (workshop+conference) available for those wanting a deep dive.