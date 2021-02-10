export const PLANS_2021 = {
  free: {
    name: 'Developer',
    price: 0,
    taskRuns: 10000,
    additionalCost: 0,
    users: 1,
    value: 'FREE_2021',
    history: 'week',
    title: 'developer'
  },
  starter: {
    name: 'Starter',
    price: 0,
    taskRuns: 10000,
    additionalCost: '0.0025',
    users: 3,
    value: 'STARTER_2021',
    history: 'week',
    title: 'starter'
  },
  standard: {
    name: 'Standard',
    price: 0,
    taskRuns: 0,
    additionalCost: '0.0050',
    value: 'STANDARD_2021',
    users: 10,
    history: 'month',
    title: 'standard'
  },
  enterprise: {
    name: 'Enterprise',
    price: 'contact',
    value: 'ENTERPRISE_2021',
    taskRuns: 0,
    additionalCost: 0.0025,
    users: 'unlimited',
    history: 'year',
    title: 'enterprise'
  }
}

export const basicFeatures = [
  {
    name: 'Robust Scheduling',
    description:
      'Create custom schedules including business days, offsets, and blackout windows, or fall back on good old cron.'
  },
  {
    name: 'Intelligent Scheduling',
    description:
      'Schedule varying parameter values or even where your runs should occur'
  },
  {
    name: 'Artifacts',
    description: 'Publish custom data and render it in the Prefect UI'
  },
  {
    name: 'Mapping',
    description: 'Dynamically generate parallel pipelines at runtime'
  },
  {
    name: 'Retries',
    description:
      'Advanced checkpointing and real-time state reporting protect you from the unexpected'
  },
  {
    name: 'Run History',
    description:
      'Use the Prefect UI to manage all of your flow runs, no matter how often or where they run'
  },
  {
    name: 'Dataflow Automation',
    description:
      'Pass data between tasks for complex processing and advanced analytics'
  },
  {
    name: 'Caching',
    description:
      'Persist the results of complex tasks with custom validation logic'
  },
  {
    name: 'Versioning',
    description:
      "Every Prefect flow is automatically versioned, so you're always up-to-date"
  }
]
export const infrastructureFeatures = [
  {
    name: 'Hosted Orchestration Platform',
    description:
      'Focus on your code while Prefect Cloud manages a highly-available orchestration API',
    plan: 'good'
  },
  {
    name: 'Performance',
    description: 'Run tasks as fast as your internet connection allows for',
    plan: 'good'
  },
  {
    name: 'API Security',
    description: 'Permission access via API tokens',
    plan: 'good'
  },
  {
    name: 'Automatic Updates',
    description:
      'Prefect Cloud releases every two weeks with new features and performance enhancements',
    plan: 'good'
  },
  {
    name: 'Raise Rate Limits',
    description: 'TK',
    plan: 'best'
  }
]
export const observabilityFeatures = [
  {
    name: 'Log Management',
    description: 'Stream, filter, and examine all of your workflow logs',
    plan: 'good'
  },
  {
    name: 'Advanced Alerting',
    description: 'Configure notifications when custom criteria are met',
    plan: 'better'
  },
  {
    name: 'Flow SLAs',
    description: 'Set SLAs for late or long-running workflows',
    plan: 'better'
  },
  {
    name: 'Agent SLAs',
    description: 'Set SLAs for agents to ensure uptime',
    plan: 'better'
  },
  {
    name: 'History Retention',
    description: 'Track one year of run history',
    plan: 'best'
  },
  {
    name: 'Audit Trail',
    description: 'Track every action taken via the Prefect API',
    plan: 'best'
  }
]
export const orchestrationFeatures = [
  {
    name: 'Stateless Deployments',
    description:
      'Spin up and tear down agent deployments with ease - Prefect Cloud manages all state for you',
    plan: 'good'
  },
  {
    name: 'Multiple Execution Environments',
    description:
      'Promote your workflows from dev to prod with a single API call, or schedule them to run in multiple places at once!',
    plan: 'good'
  },
  {
    name: 'Secrets',
    description: 'Manage sensitive information',
    plan: 'good'
  },
  {
    name: 'Advanced Automation',
    description:
      'Automatically configure API actions when custom criteria are met',
    plan: 'better'
  },
  {
    name: 'Concurrency Limits',
    description:
      'Set concurrency limits at the flow or task level to control access to resources',
    plan: 'better'
  }
]
export const authorizationFeatures = [
  {
    name: 'Team Management',
    description:
      'Get a complete view of everyone who can access your workflows',
    plan: 'good'
  },
  {
    name: 'Read-Only Users',
    description: 'Invite analyts to work with the output of your workflows',
    plan: 'better'
  },
  {
    name: 'RBAC',
    description: 'Assign roles to users to control access',
    plan: 'best'
  },
  {
    name: 'Custom Permissions',
    description: 'Assign granular permissions, including per-project limits',
    plan: 'best'
  },
  {
    name: 'SSO',
    description: 'Log in to Prefect Cloud via SSO',
    plan: 'best'
  },
  {
    name: 'Custom Roles',
    description: 'Create and assign custom roles',
    plan: 'best'
  }
]
