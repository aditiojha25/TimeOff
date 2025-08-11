export interface TimeOffRequest {
    id: string,
    startDate: string,
    endDate: string,
    type: TimeOffType,
    notes: string,
    supervisorNote?: string
    status: Status,
}
export enum Status {
    Pending = 'pending',
    Approved = 'approved',
    Rejected = 'rejected'
}
export enum TimeOffType {
    Vacation = 'vacation',
    Sick = 'sick',
    Personal = 'personal'
}
export type StatusAction = Status.Approved | Status.Rejected;