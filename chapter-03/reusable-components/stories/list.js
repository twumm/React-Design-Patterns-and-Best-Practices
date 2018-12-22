import React from 'react'
import { storiesOf } from '@kadira/storybook'
import List from '../src/components/list'

const users = [{ id: 1, username: 'username', bio: 'bio' }]
const posts = [
  {
    id: 1,
    title: 'Create Apps with no Configuration',
    excerpt: 'Create React App is a new officially supported...',
  },
  {
    id: 2,
    title: 'Mixins Considered Harmful',
    excerpt: 'How do I share the code between several...',
  },
]

storiesOf('List', module)
  .add('with bio', () => (
    <List collection={users} textKey="bio" titleKey="username" />
  ))
  .add('without bio', () => (
    <List collection={users} titleKey="username" />
  ))

storiesOf('List', module)
  .add('without text field', () => (
    <List collection={posts} titleKey="title" />
  ))
  .add('with text field', () => (
    <List collection={posts} titleKey="title" textKey="excerpt" />
  ))
