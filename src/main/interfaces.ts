export default interface ScenarioSchema {
  id: number;
  name: string;
  content?: string;
  leadingGroup: string;
  timeOfActivation: string;
  timeOfDeadline: string;
  status: Status;
};

type LeadingGroup<GroupTypes> = GroupTypes;

type Status = 'inProcess' | 'completed' | 'freezed' | 'cancelled' | 'noWork';
