export default interface ScenarioSchema {
  id: number;
  name: string;
  content?: string;
  leadingGroup: LeadingGroup;
  timeOfActivation: string;
  timeOfDeadline: string;
  status: Status;
};

type LeadingGroup<GroupTypes> = GroupTypes;

type Status = 'inProcess' | 'completed' | 'freezed' | 'cancelled' | 'noWork';
