export const EntityStatus = {
  STORY: "story",
  NOT_STARTED: "not_started",
  IN_PROGRESS: "in_progress",
  DONE: "done",
};

export const EntityType = {
  STORY: "story",
  TASK: "task",
};

export const tasks = [
  {
    id: 1,
    type: "story",
    status: "story",
    title: "Create Task-board page",
    description:
      'Need to create board for tasks where will be 3 columns with next titles: "Todo", "In Progress", "Done"',
  },
  {
    id: 2,
    type: "task",
    status: "not_started",
    title: "Create API for Task-board",
    description: "Need to add new API for Backend and describe it in Swagger",
    parent_id: 1,
  },
  {
    id: 3,
    type: "task",
    status: "not_started",
    title: "Create UI-mocks for Task-board",
    description: "Need to create mocks with theme from UI-kit",
    parent_id: 1,
  },
  {
    id: 4,
    type: "task",
    status: "not_started",
    title: "Create Web-Interface for Task-board",
    description: "Add layout from UI-mocks and get new API from Swagger",
    parent_id: 1,
  },

  {
    id: 5,
    type: "story",
    status: "story",
    title: "Create personal page for task",
    description:
      "Need to create detail page for task where will be filters, description and comments blocks",
  },
  {
    id: 6,
    type: "task",
    status: "not_started",
    title: "Create API for single task page",
    description: "Need to add new API for Backend and describe it in Swagger",
    parent_id: 5,
  },
  {
    id: 7,
    type: "task",
    status: "not_started",
    title: "Create UI-mocks for single task page",
    description: "Need to create mocks with theme from UI-kit",
    parent_id: 5,
  },
  {
    id: 8,
    type: "task",
    status: "not_started",
    title: "Create Web-Interface for single task page",
    description: "Add layout from UI-mocks and get new API from Swagger",
    parent_id: 5,
  },

  {
    id: 9,
    type: "story",
    status: "story",
    title: "Create settings page",
    description: "Need to create task where will be sprint settings",
  },
  {
    id: 10,
    type: "task",
    status: "not_started",
    title: "Create API for settings page",
    description: "Need to add new API for Backend and describe it in Swagger",
    parent_id: 9,
  },
  {
    id: 11,
    type: "task",
    status: "not_started",
    title: "Create UI-mocks for settings page",
    description: "Need to create mocks with theme from UI-kit",
    parent_id: 9,
  },
  {
    id: 12,
    type: "task",
    status: "not_started",
    title: "Create Web-Interface for settings page",
    description: "Add layout from UI-mocks and get new API from Swagger",
    parent_id: 9,
  },

  {
    id: 13,
    type: "story",
    status: "story",
    title: "Create register and authorisation page",
    description: "Need to create authorisation with JWT-token",
  },
  {
    id: 14,
    type: "task",
    status: "not_started",
    title: "Create API for authorisation page",
    description: "Need to add new API for Backend and describe it in Swagger",
    parent_id: 13,
  },
  {
    id: 15,
    type: "task",
    status: "not_started",
    title: "Create UI-mocks for authorisation page",
    description: "Need to create mocks with theme from UI-kit",
    parent_id: 13,
  },
  {
    id: 16,
    type: "task",
    status: "not_started",
    title: "Create Web-Interface for authorisation page",
    description: "Add layout from UI-mocks and get new API from Swagger",
    parent_id: 13,
  },
];
