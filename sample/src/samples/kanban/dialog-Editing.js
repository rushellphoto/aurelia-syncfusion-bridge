import './KanbanJsonData';
export class Editing {
  constructor() {
    this.KanbanData = KanbanData;
    this.Field = { primaryKey: 'Id', content: 'Summary', tag: 'Tags', color: 'Type', priority: 'RankId'};
    this.EditSettings = {
      editItems: [
                            { field: 'Id', editType: ej.Kanban.EditingType.String, validationRules: { required: true, number: true }},
                            { field: 'Status', editType: ej.Kanban.EditingType.Dropdown },
                            { field: 'Assignee', editType: ej.Kanban.EditingType.Dropdown },
                            { field: 'Estimate', editType: ej.Kanban.EditingType.Numeric, editParams: { decimalPlaces: 2 }, validationRules: {range: [0, 1000]}},
                            { field: 'Summary', editType: ej.Kanban.EditingType.TextArea, validationRules: { required: true}}],
      allowEditing: true,
      allowAdding: true
    };
  }
}
