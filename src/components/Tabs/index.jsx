import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import useLogin from "../../hooks/useLogin";
import { FilterListIT, FilterListLanguages, FilterListCooking, FilterListBeauty, FilterListNeedlework } from './../../Utils/Filter/Filter';

export function ScrollableTabsButtonVisibleLeng({setStateUser }) {
  const {setUpdateData} = useLogin()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = (value) => {
    setStateUser(value)
    setUpdateData(item => !item)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {
          FilterListLanguages?.map((item) =>  <Tab key={item.id} label={item.title} onClick={() => onSubmit(item.value)} />)
        }

      </Tabs>
    </Box>
  );
}

export  function ScrollableTabsButtonVisibleIT({setStateUser }) {
  const {setUpdateData} = useLogin()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = (value) => {
    setStateUser(value)
    setUpdateData(item => !item)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {
          FilterListIT?.map((item) =>  <Tab key={item.id} label={item.title} onClick={() => onSubmit(item.value)} />)
        }

      </Tabs>
    </Box>
  );
}

export function ScrollableTabsButtonVisibleCooking({setStateUser }) {
  const {setUpdateData} = useLogin()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = (value) => {
    setStateUser(value)
    setUpdateData(item => !item)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {
          FilterListCooking?.map((item) =>  <Tab key={item.id} label={item.title} onClick={() => onSubmit(item.value)} />)
        }

      </Tabs>
    </Box>
  );
}

export function ScrollableTabsButtonVisibleBeauty({setStateUser }) {
  const {setUpdateData} = useLogin()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = (value) => {
    setStateUser(value)
    setUpdateData(item => !item)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {
          FilterListBeauty?.map((item) =>  <Tab key={item.id} label={item.title} onClick={() => onSubmit(item.value)} />)
        }

      </Tabs>
    </Box>
  );
}

export function ScrollableTabsButtonVisibleNeedlework({setStateUser }) {
  const {setUpdateData} = useLogin()
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onSubmit = (value) => {
    setStateUser(value)
    setUpdateData(item => !item)
  }

  return (
    <Box
      sx={{
        bgcolor: 'background.paper',
        width: '100%',
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            '&.Mui-disabled': { opacity: 0.3 },
          },
        }}
      >
        {
          FilterListNeedlework?.map((item) =>  <Tab key={item.id} label={item.title} onClick={() => onSubmit(item.value)} />)
        }

      </Tabs>
    </Box>
  );
}