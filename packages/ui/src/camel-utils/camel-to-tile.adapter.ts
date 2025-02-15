import { ITile } from '../components/Catalog/Catalog.models';
import { CatalogKind, ICamelComponentDefinition, ICamelProcessorDefinition, IKameletDefinition } from '../models';

export const camelComponentToTile = (componentDef: ICamelComponentDefinition): ITile => {
  const { name, title, description, supportLevel, label, version } = componentDef.component;
  const headerTags: string[] = [];
  const tags: string[] = [];

  if (supportLevel) {
    headerTags.push(supportLevel);
  }
  if (label) {
    tags.push(...label.split(','));
  }

  return {
    type: CatalogKind.Component,
    name,
    title,
    description,
    headerTags,
    tags,
    version,
    rawObject: componentDef,
  };
};

export const camelProcessorToTile = (processorDef: ICamelProcessorDefinition): ITile => {
  const { name, title, description, label } = processorDef.model;
  const tags = label.split(',');

  return {
    type: CatalogKind.Processor,
    name,
    title,
    description,
    tags,
    rawObject: processorDef,
  };
};

export const kameletToTile = (kameletDef: IKameletDefinition): ITile => {
  const headerTags: string[] = [];
  if (kameletDef.metadata.annotations['camel.apache.org/kamelet.support.level']) {
    headerTags.push(kameletDef.metadata.annotations['camel.apache.org/kamelet.support.level']);
  }

  const tags: string[] = [];
  if (kameletDef.metadata.labels['camel.apache.org/kamelet.type']) {
    tags.push(kameletDef.metadata.labels['camel.apache.org/kamelet.type']);
  }

  let version = undefined;
  if (kameletDef.metadata.annotations['camel.apache.org/catalog.version']) {
    version = kameletDef.metadata.annotations['camel.apache.org/catalog.version'];
  }

  return {
    type: CatalogKind.Kamelet,
    name: kameletDef.metadata.name,
    title: kameletDef.spec.definition.title,
    description: kameletDef.spec.definition.description,
    headerTags,
    tags,
    version,
    rawObject: kameletDef,
  };
};
