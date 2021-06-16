import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskForm from './TaskForm';

// test('Task Form class',() =>{
//   const {container} = render(<TaskForm />);
//   const taskRoot = container.firstChild;
//    expect(taskRoot).toHaveClass("TaskForm")
//  });


test('header classes',() =>{
  const spy = jest.fn();
  const spy2 = jest.fn();
  render(<TaskForm onSubmit={spy} onClose={spy2}/>);
  const text = screen.getByText("CHOREDEX");
  expect(text).toBeInTheDocument();
 });

 test('filling out form calls callbackwith task title, task description,days, trainer, difficulty',() =>{
  const spy = jest.fn();
  const spy2 = jest.fn();
  render(<TaskForm onSubmit={spy} onClose={spy2}/>);
  const inputTitle = screen.getByRole("textbox",{name:"Task Title:"});
  fireEvent.change(inputTitle, { target: { value: 'test thing' } });
  const inputDescription = screen.getByRole("textbox",{name:"Task Description(optional):"});
  fireEvent.change(inputDescription, { target: { value: 'test thing' } });
  const doneMondayCheckbox = screen.getByRole("checkbox", { name: "Monday" });
  fireEvent.click(doneMondayCheckbox);
  const doneTuesdayCheckbox = screen.getByRole("checkbox", { name: "Tuesday" });
  fireEvent.click(doneTuesdayCheckbox);
  const doneWednesdayCheckbox = screen.getByRole("checkbox", { name: "Wednesday" });
  fireEvent.click(doneWednesdayCheckbox);
  const doneThursdayCheckbox = screen.getByRole("checkbox", { name: "Thursday" });
  fireEvent.click(doneThursdayCheckbox);
  const doneFridayCheckbox = screen.getByRole("checkbox", { name: "Friday" });
  fireEvent.click(doneFridayCheckbox);
  const doneSaturdayCheckbox = screen.getByRole("checkbox", { name: "Saturday" });
  fireEvent.click(doneSaturdayCheckbox);
  const doneSundayCheckbox = screen.getByRole("checkbox", { name: "Sunday" });
  fireEvent.click(doneSundayCheckbox);
  const trainerSelect = screen.getByRole("listbox", { name: "Select Trainer:" });
  fireEvent.change(trainerSelect, {target: {value: 'test thing'}});
  const difficultySelect = screen.getByRole("listbox", { name: "Level of Difficulty:" });
  fireEvent.change(difficultySelect, { target: { value: 'test thing' } });


  fireEvent.click(screen.getByRole("button",{name:"Submit"}));
  expect(spy).toBeCalledWith({name: "test thing", 
  Monday: true, 
  Tuesday:true, 
  Wednesday:true,
  Thursday:true,
  Friday:true,
  Saturday:true,
  Sunday:true,


  });
  

});