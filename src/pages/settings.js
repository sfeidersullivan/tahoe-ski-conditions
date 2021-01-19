import React, { useState } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { mountainMap } from '../constants';
import SettingsItem from '../components/SettingsItem';
import {
  setMountains as setMountainsCache,
  getMountains as getMountainsCache,
} from '../localStorage';

const SettingsPage = () => {
  const cachedMountains = getMountainsCache();
  const [mountains, setMountains] = useState(cachedMountains);

  const handleAddMountain = (key) => {
    const newMountains = [...mountains, key];
    setMountains(newMountains);
    setMountainsCache(newMountains);
  };

  const handleRemoveMountain = (key) => {
    const newMountains = mountains.filter(m => m !== key);
    setMountains(newMountains);
    setMountainsCache(newMountains);
  };

  return (
    <Layout>
      <SEO title="Home" />
      <div style={{  }}>
        <ul>
          {Object.keys(mountainMap).map(key =>
            <SettingsItem
              id={key}
              name={mountainMap[key].name}
              checked={mountains.includes(key)}   
              onClick={(cb) => cb.target.checked ? handleAddMountain(key) : handleRemoveMountain(key)}
            />
          )}
        </ul>
      </div>
    </Layout>
  );
};

export default SettingsPage;
