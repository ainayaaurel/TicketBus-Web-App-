import React from 'react';
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';

const UpdateBus = (props) => {
  return (
    <div>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="Name Bus" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="Class Bus" />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="Sheet " />
      </InputGroup>
      <br />
      <InputGroup>
        <InputGroupAddon addonType="prepend">
        </InputGroupAddon>
        <Input placeholder="Price" />
      </InputGroup>
    </div>
  );
};

export default UpdateBus;