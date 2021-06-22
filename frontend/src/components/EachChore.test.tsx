import { render, screen } from '@testing-library/react';
import { Chore } from '../model/model';
import EachChore from './EachChore';


test('renders chore title',() =>{
    const sampleChore:Chore = {
        title: "Mow the lawn",
        description: "and edging too",
        difficulty: "hard",
        trainer: "Jimbo",
        complete: false
    }
  render(<EachChore chore={sampleChore} />);
  const title = screen.getByText("Mow the lawn");
  expect(title).toBeInTheDocument();
 });

 test('renders chore description',() =>{
    const sampleChore:Chore = {
        title: "Mow the lawn",
        description: "and edging too",
        difficulty: "hard",
        trainer: "Jimbo",
        complete: false
    }
  render(<EachChore chore={sampleChore} />);
  const description = screen.getByText("and edging too");
  expect(description).toBeInTheDocument();
 });

 test('renders chore difficulty',() =>{
    const sampleChore:Chore = {
        title: "Mow the lawn",
        description: "and edging too",
        difficulty: "hard",
        trainer: "Jimbo",
        complete: false
    }
  render(<EachChore chore={sampleChore} />);
  const difficulty = screen.getByText("difficulty: hard");
  expect(difficulty).toBeInTheDocument();
 });

 test('renders class when false',() =>{
    const sampleChore = {
        title: "Mow the lawn",
        discription: "and edging too",
        difficulty: "hard",
        trainer: "Jimbo",
        complete: false
    }
  const {container} = render(<EachChore chore={sampleChore} />);
  const doneButton = container.firstChild;
  expect(doneButton).not.toHaveClass("Slash");
 });

 test('renders class when true',() =>{
    const sampleChore = {
        title: "Mow the lawn",
        discription: "and edging too",
        difficulty: "hard",
        trainer: "Jimbo",
        complete: true
    }
  const {container} = render(<EachChore chore={sampleChore} />);
  const doneButton = container.firstChild;
  expect(doneButton).toHaveClass("EachChore");
 });