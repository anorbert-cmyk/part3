import React from 'react';
import Layout from './components/Layout';
import TrajectorySection from './components/TrajectorySection';
import PhasesSection from './components/PhasesSection';
import ResourcesSection from './components/ResourcesSection';
import ErrorMappingSection from './components/ErrorMappingSection';
import { analysisData } from './data';

const App: React.FC = () => {
  return (
    <Layout metadata={analysisData.metadata}>
        <TrajectorySection data={analysisData.trajectory} />
        <PhasesSection phases={analysisData.phases} />
        <ResourcesSection data={analysisData.resources} />
        <ErrorMappingSection data={analysisData.errorMapping} />
    </Layout>
  );
};

export default App;