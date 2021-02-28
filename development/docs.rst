Developing/Contributing to Hestia Documentation
================================================
.. note::
  This documentation has been community-written.


########
Checklist
########

Python 2 (not recommended because of EOL)
-----------------------------------------
Install the following pip modules:

- sphinx-tabs
- sphinx_rtd_theme
- sphinxcontrib.youtube

Python 3
---------
Install the following pip modules:

- sphinx-tabs
- sphinx_rtd_theme
- sphinxcontrib.yt

.. attention::
  For Python 3 rename the following:
  
  - conf.py => conf2.py
  - conf3.py => conf.py



########
Building
########

.. tabs:: 

    .. code-tab:: c
        Compile

        make html
    .. code-tab:: c 
        Alternative (Python 2)

        python -m sphinx -b html . _build/html
    .. code-tab:: c 
        Alternative (Python 3)

        python3 -m sphinx -b html . _build/html
