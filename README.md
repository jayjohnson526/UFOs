# UFOs
![](images/website_title.png)
Collecting UFO data and visualizing with JavaScript 

## Overview
The goal of this project is to compile recorded UFO sightings in recent years from across North America so that users can analyze the data based on user defined criteria. To make the data user friendly and interactive, we've created a webpage that allows the user to filter sightings by city, state, country, and/or shape. Whether you're a believer or not, take a look at the data and draw your own conclusions. 

![](images/filters.png)

## Results
JavaScript and HTML were used to construct the interactive webpage. The available filters are located on the lefthand side of the webpage next to the data table. When no filters are used, the table will default to showing all data. 

### *Filtering by single criteria*
If you want to filter by only one criteria (i.e. city, state, country, OR shape) enter values in only one field and press enter. For example, if you want to display only UFO sightings from Oregon, you would type the state abbreviation "or" into the "**Enter State**" field. 

![](images/single_filter.png)

**Note:** Use abbreviations for both the State and Country filters (i.e. "us" for "United States" and "ca" for "California").

### *Filtering by multiple criteria*
If you want to narrow down your search results even further, you can enter multiple search criteria. For instance, if you want to display sightings only from Grants Pass, OR that were triangular you would enter the following into the search filters:

![](images/multiple_filters.png)

Notice that it is not necessary to fill in all the filter criteria. You can filter by as little or as many criteria as you like.

To clear all the filters select "UFO Sightings" at the top left of the page:
![](images/clear_filters.png)


## Summary
Using this webpage, we are able to filter UFO sightings based on limited criteria. One drawback is that this webpage does not allow us to filter by any criteria in the data table (i.e. Duration, or Date). The information in this dataset is also very limited. The recorded sightings are only from the month of January in 2010, and mostly from the western US and Canada. 

For a more comprehensive and up-to-date analysis, we could write a script that scrapes the web for UFO sightings world-wide with no time limits. 

We could also create a heat map from this data so that users can visualize where these sightings are occuring as well as the frequency of occurrences, like the website below:

![UFO Sightings Map](https://www.arcgis.com/apps/webappviewer/index.html?id=ddda71d5211f47e782b12f3f8d06246e)