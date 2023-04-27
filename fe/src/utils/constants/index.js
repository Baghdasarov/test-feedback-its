export const LOADING_STATUSES = {
  idle: 'IDLE',
  pending: 'PENDING',
  succeeded: 'SUCCEEDED',
  failed: 'FAILED',
}

export const OPERATION_TYPES = {
  increment: 'INCREMENT',
  decrement: 'DECREMENT',
}

export const FILTER_TYPES = {
  asc: 'asc',
  desc: 'desc',
}

export const hostMachine = process.env.REACT_APP_HOST_MACHINE
