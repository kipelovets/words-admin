import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, ReferenceField, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, ArrayInput, ArrayField, SimpleFormIterator} from 'react-admin';

export const LessonsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="name" />
            <EditButton />
        </Datagrid>
    </List>
);
 
const LessonTitle = ({ record }) => {
    return <span>Lesson {record ? `"${record.name}"` : ''}</span>;
};
/*

                    <ArrayField source="prompt">
                        <Datagrid>
                            <TextInput source="text"/>
                        </Datagrid>
                    </ArrayField>
 */

export const LessonEdit = (props) => (
    <Edit title={<LessonTitle />} {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ArrayInput source="steps" sortable>
                <SimpleFormIterator sortable>
                    <ArrayInput source="prompt">
                        <SimpleFormIterator>
                            <TextInput source="text" fullWidth />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <TextInput label="Correct answer" source="answer" />
                    <TextInput source="button" />
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const LessonCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);