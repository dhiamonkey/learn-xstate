import { createMachine } from "xstate";

const machine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOgDkB7AFwH0AJCgNzACdIBiAWQHkBVAZQCi3AGqCASgG0ADAF1EoAA4VYuKrgr4FIAB6IATNIAcJAOwBOAMxHDAFgCst6aaPSAbABoQAT0TnzZpYAjEGW5vpuzkb++gC+sV5oWHiEpAzMbBBcfEJ8ACoy8kggyqrqmtp6CLa2JM6R9m6GlvqWbUZevgj6QaYkjbY2bjWODpZu8Qkg+BQQcNpJOATE2qVqGlrFVQC09iR2lrZB0uY2DvY9nYih+y1Gpm365ramjdJxU4spxOTU9EysSCrFTrCpbRC2fRmcyNezRaS9UYdHx+AKmQz6IyhVo1IxGSzxRIYJapEjpQEQYFlDaVAz6WpuSzSSH6CxBNz3ZFdQwmUzvVlBTHjGE1SaxIA */
  createMachine({
    states: {
      Not_Hovered: {
        on: {
          MOUSEOVER: "Hovered",
        },
      },

      Hovered: {
        on: {
          MOUSEOUT: "Not_Hovered",
        },
      },
    },

    initial: "Not_Hovered",
  });
