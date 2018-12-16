import React from 'react';
import { List, Datagrid, TextField, EditButton, Edit, Create, ReferenceField, DisabledInput, LongTextInput, ReferenceInput, SelectInput, SimpleForm, TextInput, ArrayInput, ArrayField, SimpleFormIterator} from 'react-admin';

export const addLessonDataProvider = requestHandler => (type, resource, params) => {
    if (resource != "lessons") {
        return requestHandler(type, resource, params);
    }

    if (type == "UPDATE" || type == "CREATE") {
        params.data.steps.forEach((step) => {
            step.prompt = step.prompt.map(p => p.text);
            step.answers = step.answers.map(b => b.text);
        });
    }

    return requestHandler(type, resource, params).then((data) => {
        if (type == "GET_LIST") {
            data.data.forEach((lesson) => {
                lesson.id = lesson.name;
            })
        } else if (["GET_ONE", "CREATE", "UPDATE"]) {
            data.data.id = data.data.name;
            data.data.steps.forEach(step => {
                step.prompt = step.prompt.map(p => {
                    return {text:p};
                });
                step.answers = step.answers.map(b => {
                    return {text:b};
                });
            });
        } 

        return data;
    });
};

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
                    <TextInput label="Correct answer" source="correct_answer" />
                    <ArrayInput source="answers">
                        <SimpleFormIterator>
                            <TextInput source="text" fullWidth />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Edit>
);

export const LessonCreate = (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <ArrayInput source="steps" sortable>
                <SimpleFormIterator sortable>
                    <ArrayInput source="prompt">
                        <SimpleFormIterator>
                            <TextInput source="text" fullWidth />
                        </SimpleFormIterator>
                    </ArrayInput>
                    <TextInput label="Correct answer" source="correct_answer" />
                    <ArrayInput source="answers">
                        <SimpleFormIterator>
                            <TextInput source="text" fullWidth />
                        </SimpleFormIterator>
                    </ArrayInput>
                </SimpleFormIterator>
            </ArrayInput>
        </SimpleForm>
    </Create>
);
