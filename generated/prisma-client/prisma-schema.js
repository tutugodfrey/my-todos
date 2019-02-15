module.exports = {
        typeDefs: /* GraphQL */ `type AggregateTodo {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createTodo(data: TodoCreateInput!): Todo!
  updateTodo(data: TodoUpdateInput!, where: TodoWhereUniqueInput!): Todo
  updateManyTodoes(data: TodoUpdateManyMutationInput!, where: TodoWhereInput): BatchPayload!
  upsertTodo(where: TodoWhereUniqueInput!, create: TodoCreateInput!, update: TodoUpdateInput!): Todo!
  deleteTodo(where: TodoWhereUniqueInput!): Todo
  deleteManyTodoes(where: TodoWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  todo(where: TodoWhereUniqueInput!): Todo
  todoes(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo]!
  todoesConnection(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TodoConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  todo(where: TodoSubscriptionWhereInput): TodoSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Todo {
  id: ID!
  titile: String!
  description: String
  completed: Boolean!
  owner: User
}

type TodoConnection {
  pageInfo: PageInfo!
  edges: [TodoEdge]!
  aggregate: AggregateTodo!
}

input TodoCreateInput {
  titile: String!
  description: String
  completed: Boolean
  owner: UserCreateOneWithoutTodosInput
}

input TodoCreateManyWithoutOwnerInput {
  create: [TodoCreateWithoutOwnerInput!]
  connect: [TodoWhereUniqueInput!]
}

input TodoCreateWithoutOwnerInput {
  titile: String!
  description: String
  completed: Boolean
}

type TodoEdge {
  node: Todo!
  cursor: String!
}

enum TodoOrderByInput {
  id_ASC
  id_DESC
  titile_ASC
  titile_DESC
  description_ASC
  description_DESC
  completed_ASC
  completed_DESC
}

type TodoPreviousValues {
  id: ID!
  titile: String!
  description: String
  completed: Boolean!
}

input TodoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  titile: String
  titile_not: String
  titile_in: [String!]
  titile_not_in: [String!]
  titile_lt: String
  titile_lte: String
  titile_gt: String
  titile_gte: String
  titile_contains: String
  titile_not_contains: String
  titile_starts_with: String
  titile_not_starts_with: String
  titile_ends_with: String
  titile_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  AND: [TodoScalarWhereInput!]
  OR: [TodoScalarWhereInput!]
  NOT: [TodoScalarWhereInput!]
}

type TodoSubscriptionPayload {
  mutation: MutationType!
  node: Todo
  updatedFields: [String!]
  previousValues: TodoPreviousValues
}

input TodoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TodoWhereInput
  AND: [TodoSubscriptionWhereInput!]
}

input TodoUpdateInput {
  titile: String
  description: String
  completed: Boolean
  owner: UserUpdateOneWithoutTodosInput
}

input TodoUpdateManyDataInput {
  titile: String
  description: String
  completed: Boolean
}

input TodoUpdateManyMutationInput {
  titile: String
  description: String
  completed: Boolean
}

input TodoUpdateManyWithoutOwnerInput {
  create: [TodoCreateWithoutOwnerInput!]
  delete: [TodoWhereUniqueInput!]
  connect: [TodoWhereUniqueInput!]
  set: [TodoWhereUniqueInput!]
  disconnect: [TodoWhereUniqueInput!]
  update: [TodoUpdateWithWhereUniqueWithoutOwnerInput!]
  upsert: [TodoUpsertWithWhereUniqueWithoutOwnerInput!]
  deleteMany: [TodoScalarWhereInput!]
  updateMany: [TodoUpdateManyWithWhereNestedInput!]
}

input TodoUpdateManyWithWhereNestedInput {
  where: TodoScalarWhereInput!
  data: TodoUpdateManyDataInput!
}

input TodoUpdateWithoutOwnerDataInput {
  titile: String
  description: String
  completed: Boolean
}

input TodoUpdateWithWhereUniqueWithoutOwnerInput {
  where: TodoWhereUniqueInput!
  data: TodoUpdateWithoutOwnerDataInput!
}

input TodoUpsertWithWhereUniqueWithoutOwnerInput {
  where: TodoWhereUniqueInput!
  update: TodoUpdateWithoutOwnerDataInput!
  create: TodoCreateWithoutOwnerInput!
}

input TodoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  titile: String
  titile_not: String
  titile_in: [String!]
  titile_not_in: [String!]
  titile_lt: String
  titile_lte: String
  titile_gt: String
  titile_gte: String
  titile_contains: String
  titile_not_contains: String
  titile_starts_with: String
  titile_not_starts_with: String
  titile_ends_with: String
  titile_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  completed: Boolean
  completed_not: Boolean
  owner: UserWhereInput
  AND: [TodoWhereInput!]
}

input TodoWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  fullname: String!
  email: String!
  todos(where: TodoWhereInput, orderBy: TodoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Todo!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  fullname: String!
  email: String!
  todos: TodoCreateManyWithoutOwnerInput
}

input UserCreateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutTodosInput {
  fullname: String!
  email: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  fullname_ASC
  fullname_DESC
  email_ASC
  email_DESC
}

type UserPreviousValues {
  id: ID!
  fullname: String!
  email: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  fullname: String
  email: String
  todos: TodoUpdateManyWithoutOwnerInput
}

input UserUpdateManyMutationInput {
  fullname: String
  email: String
}

input UserUpdateOneWithoutTodosInput {
  create: UserCreateWithoutTodosInput
  update: UserUpdateWithoutTodosDataInput
  upsert: UserUpsertWithoutTodosInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutTodosDataInput {
  fullname: String
  email: String
}

input UserUpsertWithoutTodosInput {
  update: UserUpdateWithoutTodosDataInput!
  create: UserCreateWithoutTodosInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  fullname: String
  fullname_not: String
  fullname_in: [String!]
  fullname_not_in: [String!]
  fullname_lt: String
  fullname_lte: String
  fullname_gt: String
  fullname_gte: String
  fullname_contains: String
  fullname_not_contains: String
  fullname_starts_with: String
  fullname_not_starts_with: String
  fullname_ends_with: String
  fullname_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  todos_some: TodoWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`
      }
    