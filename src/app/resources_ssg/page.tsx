import React from 'react'
import {fetchResources} from "@/lib/api/resources";
import {Resource} from "@/components/Resource/Resource";
import {Row} from "@/components/Row/Row";
import {Header} from "@/components/Header/Header";

export default async function SSGPage() {
  const resources = await fetchResources()
  return (
    <section className="p-6">
      <Header>🎨 Resources (SSG)</Header>
      <Row>
        {resources.map(({id, ...resource}) => <Resource key={id} {...resource} />)}
      </Row>
    </section>
  );
}