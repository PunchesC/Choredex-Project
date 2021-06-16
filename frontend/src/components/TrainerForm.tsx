import { Trainer } from '../model/model';
import { useState, FormEvent } from 'react';
import './TrainerForm.css';

interface Props {
    onSubmit: (trainer: Trainer) => void;
    onClose: () => void;
}

function TrainerForm({ onSubmit, onClose }: Props) {

    const [ name, setName ] = useState("");
    
    function handleSubmit(e:FormEvent) {
        e.preventDefault();

        const trainer: Trainer = {
            name: name,
            pokemons: []
        }

        onSubmit(trainer);
    }

    return (

        <div className="TrainerForm">
            <form onSubmit={handleSubmit}>
                <h3 className="trainerFormTitle">ADD TRAINER</h3>
                <label>name:<br></br>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label><br></br>
                <button type="submit">add</button>
                <button onClick={onClose}>close</button>
            </form>
        </div>
        
    );

}

export default TrainerForm;