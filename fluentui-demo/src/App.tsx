import { Checkbox, ChoiceGroup, DefaultButton, DetailsList, Dialog, DialogFooter, Dropdown, Icon, MessageBar, MessageBarType, Panel, PanelType, Pivot, PivotItem, PrimaryButton, Spinner, Stack, Text, TextField } from '@fluentui/react';
import React, { useState } from 'react';

export const App: React.FunctionComponent = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <Stack tokens={{childrenGap: 20, padding: 20}} horizontalAlign='start'>
      <TextField label='Input' />

      <Dropdown label='Select' options={[{key: "Option1", text: "Option 1"}, {key: "Option2", text: "Option 2"}, {key: "Option3", text: "Option 3"}]} />

      <ChoiceGroup label='Radio' options={[{key: "Option1", text: "Option 1"}, {key: "Option2", text: "Option 2"}, {key: "Option3", text: "Option 3"}]} />

      <Checkbox label='Checkbox' />

      <DefaultButton primary>Button</DefaultButton>

      <DetailsList 
        items={[{id: 1, name: "Item 1"}, {id: 2, name: "Item 2"}, {id: 3, name: "Item 3"}]} 
        columns={[{key: "id", fieldName: "id", name: "ID", minWidth: 150}, {key: "name", fieldName: "name", name: "Name", minWidth: 150}]} 
      />

      <Icon iconName='ProductList' />

      <MessageBar messageBarType={MessageBarType.info}>Message</MessageBar>

      <MessageBar messageBarType={MessageBarType.success}>Message</MessageBar>

      <MessageBar messageBarType={MessageBarType.error}>Message</MessageBar>

      <MessageBar messageBarType={MessageBarType.warning}>Message</MessageBar>

      <DefaultButton onClick={() => setIsDialogOpen(true)}>Open dialog</DefaultButton>
      <Dialog
        hidden={!isDialogOpen}
        onDismiss={() => setIsDialogOpen(false)}
        dialogContentProps={{title: "My dialog", subText: "My dialog text.", showCloseButton: true }}
      >        
        <DialogFooter>
          <PrimaryButton onClick={() => setIsDialogOpen(false)} text="Confirm" />
          <DefaultButton onClick={() => setIsDialogOpen(false)} text="Cancel" />
        </DialogFooter>
      </Dialog>
      

      <DefaultButton onClick={() => setIsPanelOpen(true)}>Open panel</DefaultButton>
      <Panel 
        isOpen={isPanelOpen}
        headerText='My panel'
        onDismiss={() => setIsPanelOpen(false)}
        type={PanelType.medium}
      >
        <Text>My panel content.</Text>
      </Panel>

      <Pivot>
        <PivotItem headerText='Tab 1'>
          <Text>Tab 1 content.</Text>
        </PivotItem>
        
        <PivotItem headerText='Tab 2'>
          <Text>Tab 1 content.</Text>
        </PivotItem>

        <PivotItem headerText='Tab 3'>
          <Text>Tab 1 content.</Text>
        </PivotItem>
      </Pivot>

      <Spinner label='Loading...' />
    </Stack>
  );
};
