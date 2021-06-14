import { Trainer } from '../model/model';
import { useState, FormEvent } from 'react';

interface Props {
    onSubmit: (trainer: Trainer) => void;
    onClose: () => void;
}

function TrainerForm({ onSubmit, onClose }: Props) {

    const [ name, setName ] = useState("");
    
    function handleSubmit(e:FormEvent) {
        e.preventDefault();

        const trainer: Trainer = {
            name: name
        }

        onSubmit(trainer);
    }

    return (

        <div className="TrainerForm">
            <form onSubmit={handleSubmit}>
                <label>name:<br></br>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </label><br></br>
                <button type="submit">add trainer</button>
                <button onClick={onClose}>close</button>
            </form>
        </div>
        
    );

}

export default TrainerForm;